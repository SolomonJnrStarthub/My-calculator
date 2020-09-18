var pp = new Vue({
    el:"#test",
    data:{
        values:0,
    },
    methods:{
        btn:function(value){
            return this.values += value;
        },
        equal:function(){
            return this.values = eval(this.values);
        },
        cancel:function(){
            this.values=""
        }
    }
})

