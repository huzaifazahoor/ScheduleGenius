from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import openai
from dotenv import dotenv_values

config = dotenv_values(".env")

@csrf_exempt
def chat_gpt_api(request):
    if request.method == "POST":
        try:
            user_input = request.POST.get("input") or None
            if user_input:
                openai.api_key = config["API_KEY"]
                response = openai.ChatCompletion.create(
                    model="gpt-3.5-turbo",
                    messages=[
                        {
                            "role": "user",
                            "content": f"Write the crontab syntax for the following text. Don't write the description.'{user_input}'",
                        },
                    ],
                )
                resp_output = (
                    response.get("choices", [{}])[0].get("message", {}).get("content")
                )
                output = [
                    clean_output(op.strip())
                    for op in resp_output.split("\n")
                    if op.strip() != ""
                ]
                return JsonResponse(
                    {
                        "input": user_input,
                        "output": output,
                        "AI_response": resp_output
                    }
                )
            else:
                e = "Please pass some input here."
        except Exception as e:
            pass
        return JsonResponse(
            {
                "error": str(e),
            }
        )
    elif request.method == "GET":
        return JsonResponse({"error": "Please post request with input field"})


def clean_output(output):
    return " ".join([word for word in output.split() if "command" not in word])