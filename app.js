const app = Vue.createApp({
    data(){
        return{
            budgetLogs: [],
            totalBudget: 0,
            totalIncome: 0,
            totalExpenses: 0,
            dropdownValue: "inc",
            inputValue:'',
            descriptionValue:'',
        };
    },
    computed:{
        buttonLabel(){
            if(this.dropdownValue==="inc"){
                return "Income";
            }
            else if(this.dropdownValue==='exp'){
                return "Expend";
            }
            else{
                return "Income";
            }
        },
    },
    methods: {
        
        callMethod(){
            this.calculateTotalBudget();
            this.calculateTotalIncome();
            if(this.inputValue){
                this.addBudgetLog(this.dropdownValue, this.inputValue, this.descriptionValue);
            }
            this.clearInput()
        },
        calculateTotalBudget(){
            if(this.dropdownValue==="inc"){
                this.totalBudget+=parseFloat(this.inputValue);
            }
            else if(this.dropdownValue==="exp"){
                this.totalBudget-=parseFloat(this.inputValue);
            }
            localStorage.setItem("totalbudget",JSON.stringify(this.totalBudget));
        },
        calculateTotalIncome(){
            console.log('hi');
            
            if(this.dropdownValue==="inc"){
                this.totalIncome+=parseFloat(this.inputValue);
                localStorage.setItem("totalincome",JSON.stringify(this.totalIncome))
            }
            else if(this.dropdownValue==="exp"){
                this.totalExpenses+=parseFloat(this.inputValue);
                localStorage.setItem("totalexpense",JSON.stringify(this.totalExpenses))
            }
        },
        getValue(e){
            this.dropdownValue=e.target.value;
            console.log(this.dropdownValue);
        },
        addBudgetLog(action, value, description ){
            this.budgetLogs.unshift({
                actionType:action,
                actionvalue: value,
                descriptionvalue: description,
            })
            localStorage.setItem("budgetlog",JSON.stringify(this.budgetLogs))
        },
        clearInput(){
            this.dropdownValue= "inc";
            this.inputValue='';
            this.descriptionValue=''
        },
        getLogs(){
            console.log('hii');
            
            var localGet=localStorage.getItem("budgetlog");
            if(localGet){
                this.budgetLogs=JSON.parse(localGet);
            }
            this.totalBudget=JSON.parse(localStorage.getItem("totalbudget"));
            this.totalIncome=JSON.parse(localStorage.getItem("totalincome"));
            this.totalExpenses=JSON.parse(localStorage.getItem("totalexpense"));
        },
        clearAll(){
            localStorage.clear();
            this.budgetLogs= [];
            this.totalBudget= 0;
            this.totalIncome= 0;
            this.totalExpenses= 0;
        }
    },
    created(){
        this.getLogs();
    },
})

app.mount("#app");