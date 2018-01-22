boardHash = {"A" => [11,22,33,44],"B" =>[22,33,55,66],"C" =>[99,55,33,77]}
boardArr = []
boardHash.each{|key,value|
	boardArr << key
}
p boardArr
boardLength = boardArr.length

@arr = []

def combination(arr, nLen, m, out, outLen)

		arr1 = []
	
        if m == 0

           p out


           @arr << out.clone
      
           # return arr1
           return

        end

        i = nLen

        while i >= m
        	out[m-1] = arr[i-1]
            combination(arr,i-1,m-1,out,outLen)
            i = i-1
        end
end

def printCombination(arr, nLen, m)
	if m > nLen 
		return
	end
	out = []
	combination(arr,nLen,m,out,m); 
end

printCombination(boardArr, boardLength, 3)

p @arr

hash_obj = {}
@arr.each{|arr1|
	
	str = ""
	obj = []
	obj1 = boardHash[arr1[0]]
	# str = 
	arr1.each{|arr2|
		# obj1 = boardHash[arr2]
		obj1 = obj1 & boardHash[arr2]
		str += arr2
	}
	if !obj1.empty?
		hash_obj[str] = obj1
	end
	
}
p hash_obj