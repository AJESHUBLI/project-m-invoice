import React, { useEffect, useState } from "react";
import axios from "axios";
import { useId } from "./IdContext";
import QRCode from "qrcode.react";

function Invoiceview() {
  const [invoice, setInvoice] = useState(null);
  const { id } = useId(); // Retrieve the invoice ID from context
  const qrCodeValue = `https://project-m-invoice.vercel.app/${id}`;

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const API = `https://52.66.122.244:8000/`;
        const response = await axios.get(`${API}invoice`);
        console.log(response)
        const filteredInvoice = response.data.find(
          (inv) => inv.invoicedetails.invoiceno === id
        );
        setInvoice(filteredInvoice);
      } catch (error) {
        console.error("Error fetching Invoice data:", error);
      }
    };
    fetchInvoice();
  }, [id]);

  return (
    <div>
        
      {invoice ? (




<div class="container">
<p class="copy">
    <b>ORIGINAL COPY</b>
</p>
<div class="content">
    <div id="background">
        <p id="bg-text">MAHAVEER TRADING COMPANY</p>
    </div>
    <p class="style">
        TAX INVOICE
    </p>
    <div class="invoice-header">

        <div class="d-flex">
            <div class="logo">
                <img src="logoPath" alt="Logo" />
            </div>
            <div class="comAddress">
                <p class="companyname1">
                    <b>
                    {invoice.companydetails.companyname}
                    </b>
                    <br />
                    {invoice.companydetails.companyofficeaddress} <br />
                    GSTIIN/UN : {invoice.companydetails.companygstno} <br />
                    State Name : {invoice.companydetails.companystate}, Code : {invoice.companydetails.companypincode}
                </p>
            </div>
        </div>



        <div class="qr">
             <QRCode class="img" value={qrCodeValue} size={80} fgColor="#000" />
        </div>
    </div>

    <div class="section1  d-flex">
        <div class="s1-part1">
            <div class="left">
                <b>Invoice No</b>
                : {invoice.invoicedetails.invoiceno} &nbsp;
            </div>
            <div>
                <p class="alignleft mb-1">
                    <b>BUYER</b> (if other than Consignee)<br />
                    {invoice.buyerdetails.buyercompanyname} <br />
                    {invoice.buyerdetails.buyercompanyaddress}<br />
                    GSTIN/UIN : {invoice.buyerdetails.buyercompanygstno} <br />
                    State Name : {invoice.buyerdetails.buyercompanystatename}, Code : {invoice.buyerdetails.buyercompanystatecode}
                </p>
            </div>

        </div>
        <div class="s1-part2">
            <div class="right">
                <b>Date</b>
                : {invoice.invoicedetails.invoicedate} &nbsp;
            </div>
            <div>
                <p class="alignright mb-1">
                    <b>Consignee</b> <br />
                    {invoice.sellerdetails.sellercompanyname} <br />
                    {invoice.sellerdetails.sellercompanyaddress}<br />
                    GSTIN/UIN : {invoice.sellerdetails.sellercompanygstno}
                    <br />
                    State Name : {invoice.sellerdetails.sellercompanystatename}, Code : {invoice.sellerdetails.sellercompanystatecode}
                </p>
            </div>
        </div>



    </div>

    <div class="section2">
        <div class="line-text">
            <b>Vehicle Number :</b>:{invoice.vehicledetails.vechiclenumber} &nbsp;&nbsp; <b> Driver Number: </b>{invoice.vehicledetails.drivernumber} &nbsp;&nbsp;
            <b>Load From </b> :{invoice.loadingdetails.startpoint}&nbsp; <b>To </b> :{invoice.loadingdetails.endpoint}&nbsp;&nbsp;&nbsp;<b>Ref. </b>:{invoice.boardingdetails.partyref}
        </div>
    </div>

    <div class="section3">
        <table class="table01" >
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>DESCRIPTION OF GOODS</th>
                    <th>HSN/SAC</th>
                    <th>QUANTITY(Kgs.)</th>
                    <th>PRICE(Per Kg)</th>
                    <th>AMOUNT</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-less" >
                    <td>1
                    </td>
                    <td>
                        MS PIPE
                        <br />
                        (DESCRIPTION)
                        <br />
                    </td>
                    <td>7306 </td>
                    <td>20330 </td>
                    <td>29.8</td>
                    <td class="text-end">605,834.00</td>
                </tr>
                <tr class="border-less" >
                    <td>1
                    </td>
                    <td>
                        MS PIPE
                        <br />
                        (DESCRIPTION)
                        <br />
                    </td>
                    <td>7306 </td>
                    <td>20330 </td>
                    <td>29.8</td>
                    <td class="text-end">605,834.00</td>
                </tr>
                <tr class="border-less" >
                    <td>1
                    </td>
                    <td>
                        MS PIPE
                        <br />
                        (DESCRIPTION)
                        <br />
                    </td>
                    <td>7306 </td>
                    <td>20330 </td>
                    <td>29.8</td>
                    <td class="text-end">605,834.00</td>
                </tr>
                <tr class="border-less" >
                    <td>1
                    </td>
                    <td>
                        MS PIPE
                        <br />
                        (DESCRIPTION)
                        <br />
                    </td>
                    <td>7306 </td>
                    <td>20330 </td>
                    <td>29.8</td>
                    <td class="text-end">605,834.00</td>
                </tr>
                <tr class="border-less" >
                    <td>1
                    </td>
                    <td>
                        MS PIPE
                        <br />
                        (DESCRIPTION)
                        <br />
                    </td>
                    <td>7306 </td>
                    <td>20330 </td>
                    <td>29.8</td>
                    <td class="text-end">605,834.00</td>
                </tr>
                <tr class="border-less" >
                    <td>1
                    </td>
                    <td>
                        MS PIPE
                        <br />
                        (DESCRIPTION)
                        <br />
                    </td>
                    <td>7306 </td>
                    <td>20330 </td>
                    <td>29.8</td>
                    <td class="text-end">605,834.00</td>
                </tr>
                <tr class="border-less" >
                    <td>1
                    </td>
                    <td>
                        MS PIPE
                        <br />
                        (DESCRIPTION)
                        <br />
                    </td>
                    <td>7306 </td>
                    <td>20330 </td>
                    <td>29.8</td>
                    <td class="text-end">605,834.00</td>
                </tr>
                <tr class="border-less" >
                    <td>1
                    </td>
                    <td>
                        MS PIPE
                        <br />
                        (DESCRIPTION)
                        <br />
                    </td>
                    <td>7306 </td>
                    <td>20330 </td>
                    <td>29.8</td>
                    <td class="text-end">605,834.00</td>
                </tr>
                <tr class="border-less" >
                    <td>1
                    </td>
                    <td>
                        MS PIPE
                        <br />
                        (DESCRIPTION)
                        <br />
                    </td>
                    <td>7306 </td>
                    <td>20330 </td>
                    <td>29.8</td>
                    <td class="text-end">605,834.00</td>
                </tr>
                <tr class="border-less" >
                    <td>1
                    </td>
                    <td>
                        MS PIPE
                        <br />
                        (DESCRIPTION)
                        <br />
                    </td>
                    <td>7306 </td>
                    <td>20330 </td>
                    <td>29.8</td>
                    <td class="text-end">605,834.00</td>
                </tr>
                <tr class="border-less" >
                    <td>1
                    </td>
                    <td>
                        MS PIPE
                        <br />
                        (DESCRIPTION)
                        <br />
                    </td>
                    <td>7306 </td>
                    <td>20330 </td>
                    <td>29.8</td>
                    <td class="text-end">605,834.00</td>
                </tr>
               


                <tr class="border-less">
                    <td></td>
                    <td class="text-end">
                        <br />
                        ITEM TOTAL
                        <br />
                        <br />
                        OUTPUT CGST @ 9% <br />
                        OUTPUT SGST @ 9% <br />
                        OUTPUT IGST @ 18% <br />

                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-end">
                        605,834.00
                        <br />
                        <br />
                        54,525.06 <br />
                        &nbsp;54,525.06 <br />
                        (-)0.12
                    </td>
                </tr>

                <tr>
                    <td>
                        <p>
                            &nbsp;&nbsp;<br />
                            &nbsp;&nbsp;<br />
                            &nbsp;&nbsp;<br />
                            &nbsp;&nbsp;<br />
                            &nbsp;&nbsp;<br />
                        </p>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr class="cus_tr">
                    <td></td>
                    <td>TOTAL</td>
                    <td></td>
                    <td>20330</td>
                    <td></td>
                    <td class="text-end">
                        714,884.00
                    </td>
                </tr>

                <tr class="cus_tr">
                    <td colspan="2">
                        <div class="amtword">AMOUNT CHARGEABLE (IN WORDS)</div>
                    </td>
                    <td colspan="4">
                        SEVEN LAKH FOURTEEN THOUSAND EIGHT HUNDRED EIGHTY FOUR
                        RUPEES ONLY
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <br/>

    <div class="section4">
        <table class="table2">
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>HSN/SAC</th>
                    <th>TAXABLE VALUE</th>
                    <th colspan="6">TAX CALCULATION</th>
                    <th>AMOUNT</th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th colspan="2" class="al-center">CGST</th>
                    <th colspan="2" class="al-center" >SGST</th>
                    <th colspan="2" class="al-center" >IGST</th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>RATE</th>
                    <th>AMOUNT</th>
                    <th>RATE</th>
                    <th>AMOUNT</th>
                    <th>RATE</th>
                    <th>AMOUNT</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>7306</td>
                    <td class="text-end">
                        605,834.00
                    </td>

                   {/* <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td> 
                   <td>18%</td>
                    <td class="text-end">
                        <%= commaNumber((18/100 * (item.itemprice* item.itemquantity)).toFixed(2)) %>
                    </td>  */}

                    <td>9%</td>
                    <td class="text-end">
                        54,525.06
                    </td>
                    <td>9%</td>
                    <td class="text-end">
                        54,525.06
                    </td>
                    <td>-</td>
                    <td>-</td>


                    <td class="text-end">
                        109,050.12
                    </td>
                </tr>
                

           
                <tr class="cus_tr">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>TOTAL</td>
                    <td class="text-end">109,050.12</td>
                </tr>
               
                <tr class="cus_tr">
                    <td colspan="3">
                        <div class="amtword">AMOUNT CHARGEABLE (IN WORDS)</div>
                    </td>
                    <td colspan="7">
                        ONE LAKH NINE THOUSAND FIFTY RUPEES AND TWELVE PAISE ONLY

                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="section5">
        <div class="s5-part1 flex">
            <p class="disclaimer"><b>DISCLAIMER</b></p>
            <p >
                <b> FOR {invoice.companydetails.companyname}</b>
            </p>
        </div>
        <div class="bottomleft">
            <p class="disfont">
                WE DECLARED THAT THIS INVOICE SHOWS THE ACTUAL PRICE <br />
                OF THE GOOD DESCRIBED AND THAT ALL PARTICULAR ARE
            </p>
           
        </div>

        <div class="bottomright">
            <p>Authorized Signature</p>

        </div>
        <div class="center">
            <p>This is a computer generated invoice</p>
        </div>

    </div>

</div>
</div>





      ) : (
        <p>No invoice found with the provided ID</p>
      )}
    </div>
  );
}

export default Invoiceview;
