var allFoodData = [
   {key:"V00OSTKZWI", category:"breakfast", name:"Bagel And Cream Cheese", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/pdfGzyp/breakfast1.png", price:9.50},
   {key:"P00OSTDZWM", category:"breakfast", name:"Breakfast sandwich", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/8bJV04d/breakfast2.png", price:18.00},
   {key:"B00OCDKZWM", category:"breakfast", name:"Baked Chiken", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/xjkVyVZ/breakfast3.png", price:30.00},
   {key:"B00OSTMKWM", category:"breakfast", name:"Eggs Benedict", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/GPS1MS0/breakfast4.png", price:8.00},
   {key:"B00OSVFZWM", category:"breakfast", name:"Toast Croissant Fried egg", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/brDv96s/breakfast5.png", price:12.50},
   {key:"B00OSTKZNB", category:"breakfast", name:"Full Breakfast Fried Egg Toast", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/WfVDMQ2/breakfast6.png", price:15.90},
   {key:"W0OSTWER", category:"dinner", name:"Bagel And Cream Cheese", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/BsmW04m/dinner1.png", price:10.50},
   {key:"U0OSTYUI", category:"dinner", name:"Salmon with grapefruit salad", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/85FdR1G/dinner2.png", price:6.00},
   {key:"Y0OSTPLK", category:"dinner", name:"Lemony salmon piccata", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/7CNNcX6/dinner3.png", price:38.00},
   {key:"T0OSTHGF", category:"dinner", name:"Pork tenderloin with quinoa", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/JB1JctT/dinner4.png", price:23.00},
   {key:"R0OSTSAZ", category:"dinner", name:"French fries with cheese", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/CBYXsWr/dinner5.png", price:50.00},
   {key:"E0OSTCVB", category:"dinner", name:"Garlic butter salmon", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/KV78f0v/dinner6.png", price:9.50},
   {key:"zaq", category:"lunch", name:"Healthy Meal Plan", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/F7CKNrj/lunch1.png", price:25.00},
   {key:"xsw", category:"lunch", name:"Fried chicken bento", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/zGTrGFw/lunch2.png", price:9.00},
   {key:"cde", category:"lunch", name:"Tarang-Rubbed-Salman", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/prFCj77/lunch3.png", price:24.00},
   {key:"vfr", category:"lunch", name:"Indian Lunch", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/pX701Bg/lunch4.png", price:8.00},
   {key:"bgt", category:"lunch", name:"Beef Steak", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/f85H3vz/lunch5.png", price:27.00},
   {key:"nhy", category:"lunch", name:"Thie Steak", subName:"Lorem Ipsum is simply dummy", details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining", image:"https://i.ibb.co/Vpf4qPW/lunch6.png", price:32.00},
   ];
   
   export default allFoodData;
   