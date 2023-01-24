function example() {
    let input = read()
    if (input.length === 0) {
        print("Keine Eingabe vorhanden...")
    } else {
        print(input)
    }
}

function aufgabe_01() {
    let numRead = parseInt(read())
    let numSearch = 15

    if (numRead < numSearch) {
        print ("die gesuchte Zahl ist grösser")
    }

    if (numRead > numSearch) {
        print("Die geuschte Zahl ist kleiner")
    }
    
    if( numRead === numSearch) {
        print("YES YES YES")
    }
 

}

function aufgabe_02() {
    // Obergrenze von Eingabe auslesen
    let upperBound = parseInt(read())

    // Zähle von 0 bis zur Obergrenze
    // TODO: implement

    for ( let i = 0;  i < upperBound; i++) {
        print( 2*i )
    }
}

function example_primes() {
    // Liste der Primzahlen
    primes = [2, 3, 5, 7, 11, 13, 17, 19]
//            0  1  2  3   4   5   6   7
    for (let i = primes.length - 2 ; i > 0 ; i--) {
        print( primes[i] )
    }
}



function aufgabe_08() {
    // Liste der Primzahlen
    primes = [2, 3, 5, 7, 11, 13, 17, 19]

    for (let i = 0; i < primes.length / 2; i++) {
        print( primes[i * 2] )
    }
}

function aufgabe_09() {
    // Liste der Primzahlen
    primes = [2, 3, 5, 7, 11, 13, 17, 19]

    for (let i = primes.length - 1 ; i >= 0 ; i--) {
        print( primes[i] )
    }
}

function aufgabe_10() {
    // Liste der Primzahlen
    primes = [2, 3, 5, 7, 11, 13, 17, 19]

    for (let i = 0; i < primes.length; i++) {
        print( primes[i] )
    }
}

function example_string_to_list() {
   
    let greeting = "Ivxon"

    let res = []
  
    let greetingList = greeting.split("x") 
   
    for ( let i = 0; i < greeting.length; i++ ) {
        res.push( greeting[i] )
    }

if ( (greetingList.length >= 2))
    print(greetingList) 
} 

function aufgabe_13() {
    
}