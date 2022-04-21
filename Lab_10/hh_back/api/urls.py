from django.urls import path
# from api.views import companies_list, company_detail, vacancies_list, vacancy_detail, companies_vacancies,vacancies_top
from api.views import CompanyListAPIVIew, CompanyVacanciesAPIView, VacancyListAPIVIew, top_ten,CompanyAPIView, VacancyAPIView
from rest_framework_jwt.views import obtain_jwt_token
# urlpatterns = [
#     path('companies/', companies_list),
#     path('companies/<int:company_id>/', company_detail),
#     path('companies/<int:company_id>/vacancies/', companies_vacancies),
#     path('vacancies/', vacancies_list),
#     path('vacancies/<int:vacancy_id>/', vacancy_detail),
#     path('vacancies/top_ten/', vacancies_top),
# ]

urlpatterns = [
    path('companies/', CompanyListAPIVIew.as_view()),
    path('companies/<int:company_id>', CompanyAPIView.as_view()),
    path('companies/<int:company_id>/vacancies', CompanyVacanciesAPIView.as_view()),
    path('vacancies/', VacancyListAPIVIew.as_view()),
    path('vacancies/<int:vacancy_id>', VacancyAPIView.as_view()),
    path('vacancies/top_ten', top_ten),
    path('login/', obtain_jwt_token)
]