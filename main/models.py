from django.db import models

class Page(models.Model):
    page_url = models.CharField(max_length=50, null=True)
    page_id = models.CharField(max_length=20)
    page_description = models.TextField(blank=True)
    template = models.CharField(max_length=20)                    # further below in the file to get the model.
        
    def __str__(self):
        return self.page_url


class Description(models.Model):
    page = models.ForeignKey(Page, related_name="page_data", on_delete=models.CASCADE, blank=True, null=True)
    level = models.CharField(max_length=1, default=0)
    position = models.CharField(max_length=3, blank=True) # This field decides where the content is placed. The choice code is passed to the frontend.
    description_title = models.CharField(max_length=50, blank=True)
    description_content = models.TextField(blank=True)
    description_readmore = models.TextField(blank=True)
    description_image = models.ImageField(upload_to='des-img', blank=True, null=True)
    img_flag = models.BooleanField(default=False) # True if the description contains an image
    embedded_url=models.TextField(blank=True, null=True)

    # These properties are handled by django, and
    # will not be stored in the database. So a lot
    # of ORM functions cannot be used on them. The
    # serializers recognise them thankfully.
    @property
    def accordion_name(self):
        return self.description_title if self.description_title else "Description Object"

    @property
    def api_endpoint(self):
        page = self.page
        page_url = page.page_url
        # print(self.kwargs['page_url'])
        return "api/retrieve/description/" + str(self.pk)

    @property
    def form_fields(self):
        form_fields = [
            ['description_title', 'text'],
            ['description_content', 'textarea'],
            ['description_readmore', 'textarea'],
            ['embedded_url', 'text'],
            ['description_image', 'file']
        ]
        return form_fields



class BarEntry(models.Model):
    POSITION_CHOICES = (
        ('T', 'top'),
        ('M', 'mid'),
        ('B', 'bottom')
    )
    bar_id = models.CharField(max_length=20, blank = True, default=0)
    position = models.CharField(max_length=1, choices=POSITION_CHOICES)
    content = models.CharField(max_length=50, blank=False)
    url_link = models.TextField(blank=True, null=True)
    description = models.ForeignKey(Description, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.content


class Bar(models.Model): #Instead of writing the same thing again and again, we can just write more models for different locations and then link them to description model.
    POSITION_CHOICES = (
        ('1', 'top'),
        ('2', 'middle'),
        ('3', 'bottom'),
        ('4', 'Description')
    )
    description = models.ForeignKey(Description, on_delete=models.CASCADE)    