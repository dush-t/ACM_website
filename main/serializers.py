from .models import *
from rest_framework import serializers

class DescriptionSerializer(serializers.HyperlinkedModelSerializer):

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
            'embedded_url',
            'api_endpoint'
        )


    def create(self, validated_data):
        params = self.context['request'].get_full_path().split("/") # parsing request url to get page and position
        page_url = params[4]
        position = params[5]
        page = Page.objects.get(page_url=page_url)
        print(validated_data)
        return Description.objects.create(page=page, position=position, **validated_data)


    def update(self, instance, validated_data):
        try:
            instance.description_image = validated_data.get('description_image', instance.description_image)
        except:
            pass
        instance.description_title = validated_data.get('description_title', instance.description_title)
        instance.description_content = validated_data.get('description_content', instance.description_content)
        instance.description_readmore = validated_data.get('description_readmore', instance.description_readmore)
        instance.embedded_url = validated_data.get('embedded_url', instance.embedded_url)
        instance.save()
        return instance





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