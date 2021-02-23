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
        },
        calculateTotalIncome(){
            console.log('hi');
            
            if(this.dropdownValue==="inc"){
                this.totalIncome+=parseFloat(this.inputValue);
            }
            else if(this.dropdownValue==="exp"){
                this.totalExpenses+=parseFloat(this.inputValue);
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
        },
        clearInput(){
            this.dropdownValue= "inc";
            this.inputValue='';
            this.descriptionValue=''
        }
    }
})

app.mount("#app");