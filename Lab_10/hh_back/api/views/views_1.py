import json

from django.shortcuts import render
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Company, Vacancy
from api.serializers import CompanySerializer
# Create your views here.
@csrf_exempt
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies,many= True)
        return JsonResponse(serializer.data, safe = False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)

@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status=400)
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = CompanySerializer(instance=company,data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message':'deleted'},status = 204)

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status=400)
    return JsonResponse(vacancy.to_json())

def companies_vacancies(request, company_id):
    try:
        companies = Vacancy.objects.all().filter(company=company_id)
        companies_json = [company.to_json() for company in companies]
    except Vacancy.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status=400)
    return JsonResponse(companies_json, safe=False)

def vacancies_top(request):
    try:
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    except Vacancy.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status=400)
    return JsonResponse(vacancies_json, safe=False)