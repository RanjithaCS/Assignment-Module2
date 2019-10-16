var fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  var fileToBeAdded;
  rl.question('Please enter the file name : ', (answer) => {
      if(answer){
        fileToBeAdded = answer.toString();

        if(fs.readFileSync('./filenames.txt').toString().includes(fileToBeAdded.toString())) {
            console.log('File already exists !! Choose a different file name ');
        }

        else {
            fs.appendFile('./filenames.txt' , '\n'+fileToBeAdded.toString(),function(err){
                if(err) {
                    return console.error(err);
                } else {
                    console.log('Creating file...');
                }
            });
           
            fs.writeFile(fileToBeAdded.toString() , 'You are awesome!!!!',function(err){
                if(err) {
                    return console.error(err);
                } else {
                    console.log('File created successfully ');
                }
            });
        }
       
      }
    rl.close();
  });
 