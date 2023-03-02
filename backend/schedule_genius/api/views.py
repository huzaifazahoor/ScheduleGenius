from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def chat_gpt_api(request):
    if request.method == "POST":
        input = request.POST.get("input") or None
        return JsonResponse(
            {
                "input": input,
                "output": ["* * * 24"],
            }
        )
    elif request.method == "GET":
        return JsonResponse({"message": "Please post request with input field"})
