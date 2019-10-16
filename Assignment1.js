var fs = require('fs');
const arg = require('yargs').argv;
var numberOfArgs = process.argv.length;

if(numberOfArgs > 2) {

    for(var i=2; i< numberOfArgs; i++)
    {
        var fn = process.argv[i]+ " ";
       fileUpdate(fn.toString());
    }
    return;
} else {
    const readline = require('readline');
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Please enter the file name : ', (answer) => {
      if(answer){   
       fileUpdate(answer.toString());
      } else {
        console.log('Exiting program');
      }
    rl.close();
  });

}

  function fileUpdate (answer) 
   {
        var fileToBeAdded = answer.toString();
        if(fs.readFileSync('./filenames.txt').toString().includes(fileToBeAdded.toString())) {
            console.log('File '+fileToBeAdded.toString()+'already exists !! Choose a different file name ');
        }

        else {
            fs.appendFile('./filenames.txt' , '\n'+fileToBeAdded.toString(),function(err){
                if(err) {
                    return console.error(err);
                }
            });
        
            fs.writeFile(fileToBeAdded.toString() , 'You are awesome!!!!',function(err){
                if(err) {
                    return console.error(err);
                } else {
                    console.log('File created successfully : ', fileToBeAdded.toString());
                }
            });
          }

    }
 