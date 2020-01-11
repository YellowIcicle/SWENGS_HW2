import datetime

from django.test import TestCase
from . import models


class MovieDBTest(TestCase):

    def test_create_person(self):
        eq = self.assertEquals # for convenience
        # 1. Create two objects of class models.Person.
        # First person is called Joe Doe (born 1955),
        # second person is called Jane Doe (born 1976)
        # TODO: Create the two model instances using Django's ORM layer:
        
        # Test: two persons should be in the database
        eq(models.Person.objects.count(),2)
        # Test: first names
        eq(models.Person.objects.all()[0].first_name,"Joe")
        eq(models.Person.objects.all()[1].first_name,"Jane")
        # Test: last names
        eq(models.Person.objects.all()[0].last_name,"Doe")
        eq(models.Person.objects.all()[1].last_name,"Doe")
        # TODO: write test for model instances to check of year of birth is set correctly
        pass

    def test_update_person(self):
        joe  = models.Person.objects.create( first_name = "Joe" , last_name = "Doe", year_of_birth=1955)
        jane = models.Person.objects.create( first_name = "Jane", last_name = "Doe", year_of_birth=1976)
        # TODO: Update the record of Jane Doe, set the year_of_birth to 1962

        # Test year of birth of record "Jane Doe"
        jane_updated = models.Person.objects.get(first_name = "Jane", last_name = "Doe")
        self.assertEquals(jane_updated.year_of_birth,1976)

    def test_delete_person(self):
        models.Person.objects.create( first_name = "Joe" , last_name = "Doe", year_of_birth=1955)
        models.Person.objects.create( first_name = "Jane", last_name = "Doe", year_of_birth=1976)
        models.Person.objects.create( first_name = "Jonathan", last_name = "Smith", year_of_birth=1976)
        models.Person.objects.create( first_name = "Jerry", last_name = "Smith", year_of_birth=1971)
        # TODO: delete the record of jerry smith

        self.assertEquals(models.Person.objects.count(),3)

    def test_movie_creation(self):
        # TODO:
        # First, create a new Person model instance (to your liking)
        # Second, create a model instance for Country called "USA"
        # Third, create a model instance for a movie called Blade runner. Fill fields to your liking
        # and associate the movie model instance correctly with the previously created country.
        # Last, associate the freshly created Movie model instance if the person instance.
        # HINT: for creating the release date, refer to the Python standard library datetime
        # (it is already imported at the top of this file), more information available at
        # https://docs.python.org/3.7/library/datetime.html
        # test, if actor is correctly associated with the movie:
        self.assertEquals(blade_runner.actors.count(),1)

    def test_duplicate_records(self):
        # The extra mile:
        # TODO: write your own model manager according to the specification and test it appropriately
        pass
