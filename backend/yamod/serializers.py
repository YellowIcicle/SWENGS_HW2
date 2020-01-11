from rest_framework import serializers
from .models import Country, Car, Founder, Manufacturer


class CountryOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id', 'name', 'capital']


class CarListSerializer(serializers.ModelSerializer):
    manufacturer_name = serializers.SerializerMethodField()

    class Meta:
        model = Car
        fields = ['id', 'model', 'manufacturer_name', 'price', 'condition', 'color']

    def get_manufacturer_name(self, obj):
        return obj.manufacturer.name if obj.manufacturer else ''


class CarFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Car
        fields = '__all__'


class FounderOptionSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = Founder
        fields = ['id', 'name', 'year_of_birth']

    def get_name(self, obj):
        return ' '.join(filter(None, (obj.first_name, obj.last_name)))

class ManufacturerOptionSerializer(serializers.ModelSerializer):
    headquarters_name = serializers.SerializerMethodField()

    class Meta:
        model = Manufacturer
        fields = '__all__'

    def get_headquarters_name(self, obj):
        return obj.headquarters.name if obj.headquarters else ''

class ManufacturerFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Manufacturer
        fields = '__all__'


