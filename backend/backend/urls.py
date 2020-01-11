from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework_jwt.views import obtain_jwt_token

from yamod import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('country/options', views.country_option_list),
    path('car/list', views.cars_list),
    path('car/create', views.car_form_create),
    path('car/<int:pk>/get', views.car_form_get),
    path('car/<int:pk>/update', views.car_form_update),
    path('car/<int:pk>/delete', views.car_delete),
    path('founder/create', views.founder_form_create),
    path('founder/options', views.founder_option_list),
    path('manufacturer/list', views.manufacturer_option_list),
    path('manufacturer/create', views.manufacturer_form_create),
    path('manufacturer/<int:pk>/get', views.manufacturer_form_get),
    path('manufacturer/options', views.manufacturer_option_list),
    url(r'^api-token-auth/', obtain_jwt_token)


]
