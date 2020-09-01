FCFS= function(AT={},BT={}){
    var WT= [];
    var CT =[];
    var TAT =[];
    var RT=[];
    var processes=[];
    CT[0]=BT[0];
    var data = 0;

    for ( var i = 1; i<BT.length;i++){
        if(AT[i]>CT[i-1]){
            CT[i]=AT[i]+BT[i];
        }
        else {
            CT[i]=CT[i-1]+BT[i]; 
        }
    }

    for ( var i = 0; i<BT.length;i++){
        TAT[i]=CT[i]-AT[i];
    }

    for ( var i = 0; i<BT.length;i++){
        WT[i]=TAT[i]-BT[i];
    }

    for ( var i = 0; i<BT.length;i++){
        processes.push([['P-'+BT.length],[AT[i]],[BT[i]],[CT[i]],[TAT[i]],[WT[i]]]);
    }

    return processes;
}
