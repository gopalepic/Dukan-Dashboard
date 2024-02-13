import RevenueCard from './components/RevenueCard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Amounts from './components/Amounts'
import {TransactionsHeader,
  TrasactionsDetails,
  Transactionsearch,
  TransactionsTableHeader
} from './components/Transactions'
function App() {

  
    const transactionsData = [
      {
        orderId: "#281209",
        status: true,
        transactionId: "TRX123456",
        refundDate: "Today, 8:45 PM",
        orderAmount: "$1125.00"
      },
      {
        orderId: "#281210",
        status: false,
        transactionId: "TRX123457",
        refundDate: "Tomorrow, 10:00 AM",
        orderAmount: "$202.00"
      },
      {
        orderId: "#281211",
        status: true,
        transactionId: "TRX123458",
        refundDate: "Yesterday, 3:30 PM",
        orderAmount: "$30.00"
      },
      {
        orderId: "#281212",
        status: true,
        transactionId: "TRX123459",
        refundDate: "Today, 8:45 PM",
        orderAmount: "$779.00"
      },
      {
        orderId: "#281213",
        status: "Processing",
        transactionId: "TRX123460",
        refundDate: "Today, 11:20 AM",
        orderAmount: "$110.00"
      },
      {
        orderId: "#281214",
        status: false,
        transactionId: "TRX123461",
        refundDate: "Tomorrow, 9:00 AM",
        orderAmount: "$113.00"
      },
      {
        orderId: "#281215",
        status: "Successful",
        transactionId: "TRX123462",
        refundDate: "Today, 8:45 PM",
        orderAmount: "$300.00"
      },
      {
        orderId: "#281216",
        status: false,
        transactionId: "TRX123463",
        refundDate: "Yesterday, 4:00 PM",
        orderAmount: "$420.00"
      },
  ]
  return (
    <div  >
      <body className='pt-20 mb-100 bg-gray-50 pl-60'>
      <Sidebar ></Sidebar>
      <Navbar ></Navbar>
      <Amounts></Amounts>
      <div className='-ml-56 md:ml-0'>
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
        <RevenueCard title={"Next payout"} amount={"2,312.23"} orderCount={23} first={true} date={true} dateTime={"Today,04:00PM"}></RevenueCard>
        <RevenueCard title={"Amound Pending"} amount={"92,312.20"} orderCount={9} ></RevenueCard>
        <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"}  ></RevenueCard>

        </div>
        <div className='mr-12 ml-2'>
          <TransactionsHeader payouts={22} refunds={30}></TransactionsHeader>
          <div className='pl '>
            <Transactionsearch ></Transactionsearch>
            <table className='table-auto w-full  '>
               <thead className='bg-gray-200'>
                  <TransactionsTableHeader />
               </thead>

            <tbody >
             { transactionsData.map((transaction , index) => (
              <tr >
                <TrasactionsDetails 
                    key={index}
                    orderId={transaction.orderId}
                    status={transaction.status}
                    transactionId={transaction.transactionId}
                    refundDate={transaction.refundDate}
                    orderAmount={transaction.orderAmount}
                /></tr>
              ))}
           </tbody>
          </table>
          
        </div>
         
      </div>

 </div>
      </body>
     
   
  
    </div>
  )
}

export default App
