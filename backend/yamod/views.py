from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from yamod.models import Country, Car, Founder, Manufacturer
from yamod.serializers import CountryOptionSerializer, CarListSerializer, CarFormSerializer, FounderOptionSerializer, \
    ManufacturerOptionSerializer, ManufacturerFormSerializer


@swagger_auto_schema(method='GET', responses={200: CountryOptionSerializer(many=True)})
@api_view(['GET'])
def country_option_list(request):
    countries = Country.objects.all()
    serializer = CountryOptionSerializer(countries, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: CarListSerializer(many=True)})
@api_view(['GET'])
def cars_list(request):
    countries = Car.objects.all()
    serializer = CarListSerializer(countries, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=CarFormSerializer, responses={200: CarFormSerializer()})
@api_view(['POST'])
def car_form_create(request):
    data = JSONParser().parse(request)
    serializer = CarFormSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=CarFormSerializer, responses={200: CarFormSerializer()})
@api_view(['PUT'])
def car_form_update(request, pk):
    try:
        car = Car.objects.get(pk=pk)
    except Car.DoesNotExist:
        return Response({'error': 'Car does not exist (yet).'}, status=404)

    data = JSONParser().parse(request)
    serializer = CarFormSerializer(car, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: CarFormSerializer()})
@api_view(['GET'])
def car_form_get(request, pk):
    try:
        car = Car.objects.get(pk=pk)
    except Car.DoesNotExist:
        return Response({'error': 'Car does not exist (yet).'}, status=404)

    serializer = CarFormSerializer(car)
    return Response(serializer.data)


@api_view(['DELETE'])
def car_delete(request, pk):
    try:
        car = Car.objects.get(pk=pk)
    except Manufacturer.DoesNotExist:
        return Response({'error': 'Car does not exist.'}, status=404)
    car.delete()
    return Response(status=204)


@swagger_auto_schema(method='GET', responses={200: FounderOptionSerializer(many=True)})
@api_view(['GET'])
def founder_option_list(request):
    founders = Founder.objects.all()
    serializer = FounderOptionSerializer(founders, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=FounderOptionSerializer, responses={200: FounderOptionSerializer()})
@api_view(['POST'])
def founder_form_create(request):
    data = JSONParser().parse(request)
    serializer = FounderOptionSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: ManufacturerOptionSerializer(many=True)})
@api_view(['GET'])
def manufacturer_option_list(request):
    manufacturers = Manufacturer.objects.all()
    serializer = ManufacturerOptionSerializer(manufacturers, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=ManufacturerOptionSerializer, responses={200: ManufacturerOptionSerializer()})
@api_view(['POST'])
def manufacturer_form_create(request):
    data = JSONParser().parse(request)
    serializer = ManufacturerOptionSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@swagger_auto_schema(method='GET', responses={200: ManufacturerFormSerializer()})
@api_view(['GET'])
def manufacturer_form_get(request, pk):
    try:
        manufacturer = Manufacturer.objects.get(pk=pk)
    except Manufacturer.DoesNotExist:
        return Response({'error': 'Manufacturer does not exist (yet).'}, status=404)

    serializer = ManufacturerFormSerializer(manufacturer)
    return Response(serializer.data)
