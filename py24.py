emp_salary=30000
pf=12
tax=8
pf_amt=emp_salary*pf/100
print("pf_amt is :",pf_amt)
tax_amt=emp_salary*tax/100
print("tax_amt is :",tax_amt)
final_monthly_salary=emp_salary-(pf_amt+tax_amt)
print("final_monthly_salary is :",final_monthly_salary)
