target_goal = float(input("Enter your savings goal: "))
current_savings = float(input("Enter your current savings: "))

monthly_saving = float(input("Enter your monthly saving amount: "))

months = (target_goal - current_savings) / monthly_saving

print("It will take",months,"months to reach your savings goal.")
