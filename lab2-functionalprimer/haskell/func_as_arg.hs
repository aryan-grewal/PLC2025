{- --create inpFunc
inpFunc = [1..5] 

--Define applicatorFunc
applicatorFunc inpFunc s = if s=='s' then sum inpFunc else (sum inpFunc)/5  

main = doz
    let result = applicatorFunc inpFunc 'a' --Call applicatorFunc with inpFunc and 'a' as args
    putStrLn("sum = " ++ show(result))
-}

-- Takes two integers a and b and generates the list
inpFunc :: Int -> Int -> [Int]
inpFunc a b = [a..b]

-- applicatorFunc using guards
applicatorFunc :: [Int] -> Char -> Double
applicatorFunc nums s
    | s == 's'  = fromIntegral (sum nums)  -- Sum
    | otherwise = fromIntegral (sum nums) / fromIntegral (length nums) -- Average

main :: IO ()
main = do
    putStrLn "Enter the starting number (a):"
    a <- readLn
    putStrLn "Enter the ending number (b):"
    b <- readLn
    putStrLn "Enter 's' for sum or any other character for average:"
    s <- getChar
    let numbers = inpFunc a b
    let result = applicatorFunc numbers s
    putStrLn ("Result: " ++ show result)