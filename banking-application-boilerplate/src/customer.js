var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
     
      let duplicate = false;
      for (let i = 0; i < customerList.length; i++) {
            if (customerList[i][0] == CustomerId)  {
              duplicate = true;
              break;
            }
          }
        
          // add the customer if not a duplicate
      if (!duplicate) {
            customerList.push([CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category])
      }
     
      return customerList.length
      
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      const updateCustomer = {
            CustomerId: CustomerId,
            CustomerName: CustomerName,
            CustomerAge: CustomerAge,
            CustomerAddress:CustomerAddress,
            CustomerContactNumber:CustomerContactNumber,
            Category:Category
          };
          
      for (let i = 0; i < customerList.length; i++) {
            if (customerList[i][0] == updateCustomer.CustomerId)  {
                  
                  
                  if (updateCustomer.CustomerName)  {
                        customerList[i][1] = updateCustomer.CustomerName
                       
                  }
                   if (updateCustomer.CustomerContactNumber)  {
                        customerList[i][4] = updateCustomer.CustomerContactNumber
                       
                  } if (updateCustomer.CustomerAge)  {
                        customerList[i][2] = updateCustomer.CustomerAge
                       
                  
                 
                  }else{
                        return null
                  }
            }
            
          }
      

}

const getAllCustomers=()=>{
  // Write the Logic here
  return customerList
}

module.exports={addCustomer,updateCustomer,getAllCustomers}