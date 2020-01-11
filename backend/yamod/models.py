from django.db import models


class Country(models.Model):
    class Meta:
        verbose_name_plural = "Countries"

    name = models.TextField()
    abbreviation = models.CharField(max_length=4, default="null")
    capital = models.TextField(null = True)

    def __str__(self): return self.name


class Manufacturer(models.Model):

    name = models.TextField()
    founded = models.DateField()
    founders = models.ManyToManyField('Founder', blank=True)
    headquarters = models.ForeignKey(Country, on_delete=models.CASCADE)
    website = models.CharField(max_length=30, default="")

    def __str__(self): return self.name


class Car(models.Model):

    CHOICES = (
        ('v', 'very good'),
        ('g', 'good'),
        ('k', 'ok'),
        ('b', 'bad')
    )

    model = models.CharField(max_length=30)
    manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE)
    color = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    condition = models.CharField(max_length=1, choices=CHOICES, null=True)
    used = models.BooleanField(default=False)
    Country_mostSales = models.ManyToManyField('Country', blank=True)

    def __str__(self): return self.manufacturer.name + ' ' + self.model


class Founder(models.Model):

    first_name = models.TextField()
    last_name = models.TextField()
    year_of_birth = models.IntegerField()

    def __str__(self): return self.first_name + ' ' + self.last_name



