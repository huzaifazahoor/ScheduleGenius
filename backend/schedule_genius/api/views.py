from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from chatgpt_wrapper import ChatGPT

@csrf_exempt
def chat_gpt_api(request):
    if request.method == "POST":
        try:
            bot = ChatGPT()
            user_input = request.POST.get("input") or None
            response = bot.ask(
                "Write the crontab syntax based on the following input. "
                + "Just write syntax, don't write any other description.\n'"
                + user_input
                + "'",
            )
            tracemalloc.stop()
            return JsonResponse(
                {
                    "input": user_input,
                    "output": [response],
                }
            )
        except Exception as e:
            return JsonResponse(
                {
                    "error": str(e),
                }
            )
    elif request.method == "GET":
        return JsonResponse({"error": "Please post request with input field"})
