function inFo(x){
var Infos={"solve":["To get another solution for the equation,change the initial guess with appropriate guess","Maximum iteration is for iteration wise Solution.Inappropriate value may cause unexpected result","Trigonometrical function are in radian measure"],
"derivative":["Use ^ for power","Use * for multiplication and / for division","sin,cos,tan and so on functions are also available","Example input: (5x+3(9x^2)-sin(x)+e(x))","multiply x terms if possible inside bracket <br/><b>i.e</b>write 3(9x^3) instead of 3x(9x^2)","Use sufficient brackets","Use e as a function rather than variable as e(1) for e^1","By AmRit GhiMire"],
"lpp":["Equations are in Standard form","check or uncheck the box to disable or enable the third equation","Only two equation are enabled in minimization"]
};
dt=new Date();
ra=dt.getSeconds();
ra=ra%10;
nums=Infos[x];
ni=Math.round((ra/10)*(nums.length-1));
document.getElementById("info").innerHTML=nums[ni];
}