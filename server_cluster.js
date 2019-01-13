/**
 * Created by yangbolun on 2019/1/11.
 */
var cluster = require('cluster');

function startWorker(){
    var worker = cluster.fork();
    console.log('CLUSTER:worker %d started', worker.id);
}
if(cluster.isMaster){
    require('os').cpus().forEach(function(){
        startWorker();
    });

    // 记录所有断开的工作县城。如果工作县城断块了，他应该推出
    // 因此我们可以等待 exit 时间，然后繁衍一个新工作线程来代替他
    cluster.on('disconnerct',function(worker){
        console.log('CLUSTER:worker %d disconnexted frome the cluster', worker.id);
    });

    // 当有工作线程死掉（退出）时，创建一个工作线程来代替它
    cluster.on('exit', function(worker, code ,signal){
        console.log('CLUSTER:worker %d died with exit code %d(%s)', worker.id,code,signal);
        startWorker()
    });
}

else{
    // 在这个工作线程上启动我们的应用服务器，server.js
    require('./server.js')();
}