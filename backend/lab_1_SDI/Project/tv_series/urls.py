from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views
from .views import * # TvSeriesList, TvSerieRatingFilter, ActorsList, DirestorsList, PaymentsList, Statistics, \
    #ManyStatistics

urlpatterns =[
    path('tvseries/', TvSeriesList.as_view()),
    path('tvseries/<int:id>/', TvSeriesList.as_view()),
    path('tvseries-filter/<int:rating>/', TvSerieRatingFilter.as_view()),

    path('actors/', ActorsList.as_view()),
    path('actors/<int:id>/', ActorsList.as_view()),
    path('actors-filter/<int:nr_awards>/', ActorsAwardsFilter.as_view()),

    path('directors/', DirestorsList.as_view()),
    path('directors/<int:id>/', DirestorsList.as_view()),
    path('directors/<int:id>/tvseries/', DirestorsList2.as_view()),
    path('directors/<int:id>/many/', DirestorsList.as_view()),

    path('payments/', PaymentsList.as_view()),

    path("directors/statistics/", Statistics.statistics),
    # path("directors/statistics2/", ManyStatistics.statistics),
    path("directors/statistics2/", ManyStatistics.many),
    path("directors/filter/<int:age>/", DirectorAgeFilter.as_view()),

    # path('actors/filter/<int:nr_awards>/', views.filter_brands)


]

urlpatterns = format_suffix_patterns(urlpatterns)


