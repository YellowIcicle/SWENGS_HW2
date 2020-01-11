from django.contrib import admin
from .models import *


class CarAdmin(admin.ModelAdmin): pass


class FounderAdmin(admin.ModelAdmin): pass


class CountryAdmin(admin.ModelAdmin): pass


class ManufacturerAdmin(admin.ModelAdmin): pass


admin.site.register(Manufacturer, ManufacturerAdmin)
admin.site.register(Car, CarAdmin)
admin.site.register(Country, CountryAdmin)
admin.site.register(Founder, FounderAdmin)