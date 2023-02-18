
const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    // write logic here
    // note that you check the values passed are not null before performing any operation on them
    switch(choice){
        case 'square':
            if(side!= null){
                area = side*4
            }else{
                area = -1
            }
            
            break
        case 'rectangle':
            if(length!= null && breadth != null){
                area = length*breadth
            }else{
                area = -1
            }
            
            console.log('result',area)
            break
        case 'circle':
            if(radius!=null){
                area = (radius*radius)*3.14
            }else{
                area = -1
            }
            
            console.log('result',area)
            break   
        default:
            area = -1 
            console.log('result',area)
            break   
    }
    return area
    
}
module.exports = {calculateArea}
