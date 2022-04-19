from django.contrib import admin

# Register your models here.
from api.models import Company, Vacancy


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'city', 'address')
    search_fields = ('name', 'city')
    list_filter = ('name',)


@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'salary', 'company',)
    search_fields = ('name', 'company',)
    list_filter = ('company',)
