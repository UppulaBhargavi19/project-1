def calculate_interestamount(amt, r, t):
    interest_amt = amt * r * t / 100
    return interest_amt
final_amt = calculate_interestamount(100000, 5, 12)
print(final_amt)