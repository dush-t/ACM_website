class DescriptionSerializer(serializers.HyperlinkedModelSerializer):
    accordion_name = serializers.SerializerMethodField()
    form_fields = serializers.SerializerMethodField()
    media_upload_url = serializers.SerializerMethodField()

    class Meta:
        model = Description
        fields = (
            'accordion_name',
            'campus',
            'position',
            'description_title',
            'description_content',
            'description_readmore',
            'description_image',
            'img_flag',
            'form_fields'
        )

    def get_form_fields(self, obj):
        form_fields = []
        if obj.description_title:
            form_fields.append(['description_title', 'text'])
        if obj.description_content:
            form_fields.append(['description_content', 'textarea'])
        if obj.description_readmore:
            form_fields.append(['description_readmore', 'textarea'])
        if obj.description_image:
            form_fields.append(['description_image', 'file'])

    def get_accordion_name(self, obj):
        if obj.description_title:
            return obj.description_title
        else:
            return "Description Object"

    def get_media_upload_url(self, obj):
        string = '/media_upload/Description:' + str(obj.pk)
        return string




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
