import json

from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from rest_framework.response import Response
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, CompanySerializer2, VacancySerializer


# Create your views here.
@api_view(['GET', 'POST'])
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['GET'])
def top_ten(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many = True)
        return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status=400)
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        company.delete()
        return Response({'message': 'deleted'}, status=204)

@api_view(['GET'])
def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

@api_view(['GET'])
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
