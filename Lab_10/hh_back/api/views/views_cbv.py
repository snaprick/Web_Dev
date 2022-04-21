from rest_framework.decorators import APIView
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, CompanySerializer2, VacancySerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class CompanyListAPIVIew(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class CompanyVacanciesAPIView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, company_id):
        try:
            companies = Vacancy.objects.all().filter(company=company_id)
            serializer = VacancySerializer(companies, many=True)
            return Response(serializer.data)
        except Vacancy.DoesNotExist as exception:
            return Response({'exception': str(exception)}, status=400)
        return Response(serializer.data)


class VacancyListAPIVIew(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class CompanyAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request, company_id):
        try:
            company = Company.objects.get(id=company_id)
            serializer = CompanySerializer2(company)
        except Company.DoesNotExist as exception:
            return Response({'exception': str(exception)}, status=400)
        return Response(serializer.data)

class VacancyAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request, vacancy_id):
        try:
            vacancy = Vacancy.objects.get(id=vacancy_id)
            serializer = VacancySerializer(vacancy)
        except Vacancy.DoesNotExist as exception:
            return Response({'exception': str(exception)}, status=400)
        return Response(serializer.data)