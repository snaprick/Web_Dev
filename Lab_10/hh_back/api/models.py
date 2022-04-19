from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=1000)
    description = models.TextField()
    city = models.CharField(max_length=1000)
    address = models.TextField()
    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description' : self.description,
            'city' : self.city,
            'address' : self.address
        }

    def __str__(self):
        return f'{self.name} | {self.city}'

class Vacancy(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company_id': self.company_id
        }

        def __str__(self):
            return f'{self.name} | {self.salary}'
