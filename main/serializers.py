from .models import *
from rest_framework import serializers

class DescriptionSerializer(serializers.HyperlinkedModelSerializer):
    accordion_name = serializers.SerializerMethodField()
    form_fields = serializers.SerializerMethodField()
    media_upload_url = serializers.SerializerMethodField()
    api_endpoint = serializers.SerializerMethodField()

    class Meta:
        model = Description
        fields = (
            'accordion_name',
            'position',
            'description_title',
            'description_content',
            'description_readmore',
            'description_image',
            'img_flag',
            'form_fields',
            'media_upload_url',
            'embedded_url',
            'api_endpoint'
        )

    def get_api_endpoint(self, obj):
        page = obj.page
        page_url = page.page_url
        # print(self.kwargs['page_url'])
        return "api/retrieve/description/" + str(obj.pk)

    def get_form_fields(self, obj):
        form_fields = []
        if obj.description_title:
            form_fields.append(['description_title', 'text'])
        if obj.description_content:
            form_fields.append(['description_content', 'textarea'])
        if obj.description_readmore:
            form_fields.append(['description_readmore', 'textarea'])
        # if obj.description_image:
        form_fields.append(['description_image', 'file'])
        return form_fields

    def get_accordion_name(self, obj):
        if obj.description_title:
            return obj.description_title
        else:
            return "Description Object"

    def get_media_upload_url(self, obj):
        string = '/media_upload/Description:' + str(obj.pk)
        return string

    def create(self, validated_data):
        params = self.context['request'].get_full_path().split("/") # parsing request url to get page and position lol
        print(params)
        page_url = params[4]
        position = params[5]
        print(page_url)
        page = Page.objects.get(page_url=page_url)
        return Description.objects.create(page=page, position=position, **validated_data)





class BarEntrySerializer(serializers.HyperlinkedModelSerializer):
    related_subentries = serializers.SerializerMethodField()
    accordion_name = serializers.SerializerMethodField()
    form_fields = serializers.SerializerMethodField()
    class Meta:
        model = BarEntry
        fields = ('accordion_name', 'bar_id', 'position', 'content', 'url_link', 'related_subentries', 'form_fields')

    def get_form_fields(self, obj):
        return [
            ['content', 'text'],
            ['url_link', 'text']
        ]

    def get_accordion_name(self, obj):
        return str(obj.content) + " - " + str(obj.bar_id)

    def get_related_subentries(self, obj):
        headings = obj.headings.all()
        sub_entry_list = []
        for heading in headings:
            heading_sub_entry_list = [heading.content]
            sub_entries = heading.heading_sub_entry.all()
            for sub_entry in sub_entries:
                sub_list = [sub_entry.content, sub_entry.url_link]
                heading_sub_entry_list.append(sub_list)
            sub_entry_list.append(heading_sub_entry_list)
        return sub_entry_list
