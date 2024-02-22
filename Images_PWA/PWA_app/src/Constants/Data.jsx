
// export {
//   integrationsAccountCards,
//   integrationsEcommerceCards,
//   integrationsERPCards,
//   integrationsMarketplaceCards,
//   integrationsPaymentCards,
//   integrationsCRMCards,
// };

// export const UUID = () => (Math.random() + 1).toString(36).substring(2);

// export const AddUniqueID = (Arr, lable) =>
//   Arr.map((d) => {
//     return {
//       ...d,
//       [lable]: UUID(),
//     };
//   });
// constants.js
// window.MyAppConstants = {
//     integrationsAccountCards: [
//         {
//             title: "Connect With Quickbooks Online",
//             description:
//               "QuickBooks Online is a cloud-based accounting software that simplifies financial management for businesses.",
//             buttonText: "Connect",
//             logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Accounting/quickbooks-online.png`,
//             ghost: false,
//             select: false,
//             type: "Accounting",
//             connect: false,
//             titleKey: "QuickbooksOnline",
//           },
//           {
//             title: "Connect With Quickbooks Desktop",
//             description:
//               "A robust accounting software for small and medium-sized businesses that provides comprehensive financial management tools and can be installed on a local computer.",
//             buttonText: "Connect",
//             logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Accounting/quickbooks-desktop.png`,
//             ghost: false,
//             select: false,
//             type: "Accounting",
//             connect: false,
//             titleKey: "QuickbooksDesktop",
//           },
//           {
//             title: "Connect With Xero",
//             description:
//               "Xero is an easy-to-use online accounting software designed for small businesses and their advisors.",
//             buttonText: "Connect",
//             logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Accounting/xero.png`,
//             ghost: false,
//             select: false,
//             type: "Accounting",
//             connect: false,
//             titleKey: "Xero",
//           },
        
//           {
//             title: "Connect With Zoho Books",
//             description:
//               "Zoho Books is an online accounting software designed for small businesses to manage their finances efficiently.",
//             buttonText: "Connect",
//             logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Accounting/zohobooks.png`,
//             ghost: false,
//             select: false,
//             type: "Accounting",
//             connect: false,
//             titleKey: "Zoho Books",
//           },
        
//           {
//             title: "Connect With MYOB Business",
//             description:
//               "MYOB Business is an accounting and financial management software solution for businesses in Australia and New Zealand.",
//             buttonText: "Connect",
//             logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Accounting/myob.png`,
//             ghost: false,
//             select: false,
//             type: "Accounting",
//             connect: false,
//             titleKey: "",
//           },
//           {
//             title: "Connect With Clear Books",
//             description:
//               " An online accounting software designed for small businesses, offering features for invoicing, expense tracking, and financial reporting.",
//             buttonText: "Connect",
//             logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Accounting/clearbooks.png`,
//             ghost: false,
//             select: false,
//             type: "Accounting",
//             connect: false,
//             // formData: FORMDATA.clearBookIntegrationFields,
//             titleKey: "Clear Books",
//           },
//           {
//             title: "Connect With Fresh Books",
//             description:
//               " Cloud-based accounting software tailored for freelancers and small businesses, known for its user-friendly interface, time tracking, and invoicing capabilities.",
//             buttonText: "Connect",
//             logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Accounting/freshbooks.png`,
//             ghost: false,
//             select: false,
//             type: "Accounting",
//             connect: false,
//             titleKey: "Fresh Books",
//           },
//     ],
//     // other constants if needed
//   };


export const integrationsAccountCards = [
  {
    title: "Connect With Quickbooks Online",
    description:
      "QuickBooks Online is a cloud-based accounting software that simplifies financial management for businesses.",
    buttonText: "Connect",
    logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Accounting/quickbooks-online.png`,
    ghost: false,
    select: false,
    type: "Accounting",
    connect: false,
    titleKey: "QuickbooksOnline",
  },
  {
    title: "Connect With Quickbooks Desktop",
    description:
      "A robust accounting software for small and medium-sized businesses that provides comprehensive financial management tools and can be installed on a local computer.",
    buttonText: "Connect",
    logo: `https://costallocationspro.s3.amazonaws.com/resuse-app/assets/Accounting/quickbooks-desktop.png`,
    ghost: false,
    select: false,
    type: "Accounting",
    connect: false,
    titleKey: "QuickbooksDesktop",
  },
  {
    title: "Connect With Xero",
    description:
      "Xero is an easy-to-use online accounting software designed for small businesses and their advisors.",
    buttonText: "Connect",
    logo: `https://costallocationspro.s3.amazonaws.com/resuse-app/assets/Accounting/xero.png`,
    ghost: false,
    select: false,
    type: "Accounting",
    connect: false,
    titleKey: "Xero",
  },

  {
    title: "Connect With Zoho Books",
    description:
      "Zoho Books is an online accounting software designed for small businesses to manage their finances efficiently.",
    buttonText: "Connect",
    logo: `https://costallocationspro.s3.amazonaws.com/resuse-app/assets/Accounting/zohobooks.png`,
    ghost: false,
    select: false,
    type: "Accounting",
    connect: false,
    titleKey: "Zoho Books",
  },

  {
    title: "Connect With MYOB Business",
    description:
      "MYOB Business is an accounting and financial management software solution for businesses in Australia and New Zealand.",
    buttonText: "Connect",
    logo: `https://costallocationspro.s3.amazonaws.com/resuse-app/assets/Accounting/myob.png`,
    ghost: false,
    select: false,
    type: "Accounting",
    connect: false,
    titleKey: "",
  },
  {
    title: "Connect With Clear Books",
    description:
      " An online accounting software designed for small businesses, offering features for invoicing, expense tracking, and financial reporting.",
    buttonText: "Connect",
    logo: `https://costallocationspro.s3.amazonaws.com/resuse-app/assets/Accounting/clearbooks.png`,
    ghost: false,
    select: false,
    type: "Accounting",
    connect: false,
    // formData: FORMDATA.clearBookIntegrationFields,
    titleKey: "Clear Books",
  },
  {
    title: "Connect With Fresh Books",
    description:
      " Cloud-based accounting software tailored for freelancers and small businesses, known for its user-friendly interface, time tracking, and invoicing capabilities.",
    buttonText: "Connect",
    logo: `https://costallocationspro.s3.amazonaws.com/resuse-app/assets/Accounting/freshbooks.png`,
    ghost: false,
    select: false,
    type: "Accounting",
    connect: false,
    titleKey: "Fresh Books",
  },
];

// const integrationsERPCards = AddUniqueID(
//   [
//     {
//       title: "Connect With Netsuite",
//       description:
//         "NetSuite is a cloud-based ERP system that helps streamline business processes.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/ERP/oracle-netsuite.png`,
//       formData: FORMDATA.netsuiteIntegrationFields,
//       ghost: false,
//       select: false,
//       type: "ERP",
//       connect: false,
//       titleKey: "Netsuite",
//     },
//     {
//       title: "Connect With Sage Intacct",
//       description:
//         "Sage Intacct is a cloud-based financial management solution that helps businesses grow and scale.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/ERP/sage-intacct.png`,
//       formData: FORMDATA.sageIntegrationFields,
//       ghost: false,
//       select: false,
//       type: "Accounting",
//       connect: false,
//       titleKey: "Sage Intacct",
//     },
//     {
//       title: "Connect With SAP",
//       description:
//         "SAP ERP software offers comprehensive business solutions for enterprises.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/ERP/sap.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "ERP",
//       connect: false,
//       titleKey: "",
//     },
//     {
//       title: "Connect With Microsoft Business Central",
//       description:
//         "Microsoft Business Central is an all-in-one business management solution that helps streamline financials, sales, service, and operations.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/ERP/microsoft-business-central.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "ERP",
//       connect: false,
//       titleKey: "Business Central",
//     },
//     {
//       title: "Connect With Odoo",
//       description:
//         "Odoo is an open-source ERP system that offers a suite of business applications for various functions.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/ERP/odoo.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "ERP",
//       connect: false,
//       titleKey: "",
//     },
//     {
//       title: "Connect With Acumatica",
//       description:
//         "Acumatica is a cloud-based ERP solution designed to support businesses with flexible and scalable operations.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/ERP/acumatica.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "ERP",
//       connect: false,
//       titleKey: "Acumatica",
//     },
//     {
//       title: "Connect With Brightpearl by Sage",
//       description:
//         "Brightpearl by Sage is a retail operations platform that helps businesses manage their orders, inventory, and customer data.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/ERP/brightpearl.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "Retail",
//       connect: false,
//       titleKey: "Brightpearl by Sage",
//     },
//     {
//       title: "Connect With Dynamics 365",
//       description:
//         "Dynamics 365 is a suite of intelligent business applications that help organizations manage their operations and customer relationships.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/ERP/dynamics-365.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "ERP",
//       connect: false,
//       titleKey: "",
//     },
//   ],
//   "id"
// );
// const integrationsEcommerceCards = AddUniqueID(
//   [
//     {
//       title: "Connect With Shopify",
//       description: "Shopify integration allows you to sell products online.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Ecommerce/shopify.png`,
//       formData: FORMDATA.shopifyIntegrationFields,
//       ghost: false,
//       select: false,
//       type: "Ecommerce",
//       connect: false,
//       titleKey: "Shopify",
//     },
//     {
//       title: "Connect With WooCommerce",
//       description:
//         "WooCommerce is a flexible and customizable eCommerce platform.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Ecommerce/woo-commerce.png`,
//       ghost: false,
//       select: false,
//       formData: FORMDATA.wooIntegrationFields,
//       type: "Ecommerce",
//       connect: false,
//       titleKey: "Woo Commerce",
//     },
//     {
//       title: "Connect With Magento Online",
//       description:
//         "Magento integration empowers your online store with powerful features.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Ecommerce/magento.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "Ecommerce",
//       connect: false,
//       titleKey: "",
//     },
//     {
//       title: "Connect With ShopWare",
//       description:
//         "ShopWare offers scalable eCommerce solutions for your business.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Ecommerce/shopware.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "Ecommerce",
//       connect: false,
//       titleKey: "",
//     },
//     {
//       title: "Connect With Big Commerce",
//       description:
//         "A leading e-commerce platform that empowers businesses to build and manage online stores with a wide range of customizable features and integrations.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Ecommerce/big-commerce.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "Ecommerce",
//       connect: false,
//       titleKey: "Big commerce",
//     },
//   ],
//   "id"
// );
// const integrationsMarketplaceCards = AddUniqueID(
//   [
//     {
//       title: "Connect With Amazon",
//       description:
//         "Amazon Marketplace is a leading online platform for selling products to a wide audience.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Marketplace/amazon-marketplace.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "Marketplace",
//       connect: false,
//       titleKey: "",
//     },
//     {
//       title: "Connect With eBay",
//       description:
//         "eBay is a popular online marketplace where you can buy and sell a wide range of products.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Marketplace/ebay.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "Marketplace",
//       connect: false,
//       titleKey: "",
//     },
//     {
//       title: "Connect With Walmart",
//       description:
//         "Walmart Marketplace allows you to reach a large customer base with your products.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Marketplace/walmart.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "Marketplace",
//       connect: false,
//       titleKey: "",
//     },
//   ],
//   "id"
// );
// const integrationsPaymentCards = AddUniqueID(
//   [
//     {
//       title: "Connect With Stripe",
//       description:
//         "Stripe is a popular online payment processing platform for businesses of all sizes.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Payment/stripe.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "Payment",
//       connect: false,
//       titleKey: "Stripe",
//     },
//     {
//       title: "Connect With Authorize.net",
//       description:
//         "Authorize.net offers secure payment gateway solutions for online merchants.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/Payment/authorize-net.png`,
//       formData: FORMDATA.authorizeNetIntegrationFields,
//       ghost: false,
//       select: false,
//       type: "Payment",
//       connect: false,
//       titleKey: "Authorize.net",
//     },
//   ],
//   "id"
// );
// const integrationsCRMCards = AddUniqueID(
//   [
//     {
//       title: "Connect With Zoho CRM",
//       description:
//         "Zoho CRM is a comprehensive customer relationship management solution that helps businesses of all sizes manage their sales, marketing, and support processes.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/CRM/zoho-crm.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "CRM",
//       connect: false,
//       titleKey: "Zoho CRM",
//     },
//     {
//       title: "Connect With Salesforce",
//       description:
//         "Salesforce is a leading cloud-based CRM platform that enables companies to streamline their sales, service, and marketing operations for enhanced customer engagement.",
//       buttonText: "Connect",
//       logo: `${process.env.REACT_APP_IMAGES_BASE_URL}/assets/CRM/sales-force.png`,
//       formData: "",
//       ghost: false,
//       select: false,
//       type: "CRM",
//       connect: false,
//       titleKey: "Salesforce",
//     },
//   ],
//   "id"
// );
