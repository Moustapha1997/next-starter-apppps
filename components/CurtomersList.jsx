import Link from "next/link";
import { useState, useEffect } from "react";

function CustomerPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("/api/customers");
        const data = await response.json();
        if (data._embedded && Array.isArray(data._embedded.customers)) {
          setCustomers(data._embedded.customers);
        } else {
          console.error("La réponse de l'API n'est pas dans le format attendu:", data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des clients:", error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
     
      <h1 className="text-2xl text-blue-500 font-bold">Customer List</h1>
            <table className="border-collapse border border-slate-400">
                <thead>
                    <tr>
                        <th className="border border-slate-300">Name</th>
                        <th className="border border-slate-300">Balance</th>
                        <th className="border border-slate-300">City</th>
                    </tr>
                </thead>
                <tbody>
      
        {customers.map((customer) => (
          <tr key={customer._links.self.href}>
            <td className="border border-slate-300 px-2 text-center">
              
              <Link className="px-3 transition hover:text-red 500 font-bold"  href="/AboutPage">{customer.fullname}</Link>
            </td> 
            <td className="border border-slate-300 px-2 text-center">
              {customer.balance}FCFA
            </td> 
            <td className="border border-slate-300 px-2 text-center"> 
              {customer.city}
            </td>
          </tr>
        ))}
      
      </tbody>
      </table>
    </div>
  );
}

export default CustomerPage;
