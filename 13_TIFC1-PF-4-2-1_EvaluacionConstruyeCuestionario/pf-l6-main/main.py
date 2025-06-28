import requests
import json


def trivia_fetch(num):
    url = f"http://numbersapi.com/{num}?json"  
    try:
        response = requests.get(url)
        response.raise_for_status()  
        trivia_data = response.json()
        return {"number": trivia_data["number"], "trivia": trivia_data["text"]}
    except requests.exceptions.RequestException as e:
        return {"error": f"🤬 Error while gathering info 🤬 : {e}"}
    

def main():
    print("👾 THIS IS THE API TRIVIA 👾")
    print("You enter a number to fetch trivia info bellow")
    while True:
        user_input = input("\nEnter a number here (or type 'x' to quit): ").strip()

        if user_input.lower() == "x":
            print("👻 Bye now 👻")
            break

        if user_input.isdigit():
            num = int(user_input)
            result = trivia_fetch(num)
            print("\n 🙀 Do you know that ... :")
            print(json.dumps(result, indent=4))
        else:
            print(" 🙃 Error 420 🙃 ")

if __name__ == "__main__":
    main()