loan_amt=500000
time=4
rate_of_interest=11.4
interest_amt=loan_amt*rate_of_interest*time
print("interest_amt is:",interest_amt)
final_amt=loan_amt+interest_amt
print("final_amt is:",final_amt)
emi=final_amt/time*12
print("emi is:",emi)
