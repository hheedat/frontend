rightTriangles x girth = [ (a,b,c) | c <- [1..x], b <- [1..c], a <- [1..b], a^2 + b^2 == c^2, a+b+c ==  girth]

