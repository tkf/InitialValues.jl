var documenterSearchIndex = {"docs":
[{"location":"#Initials.jl-1","page":"Home","title":"Initials.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Initials\nInitials.Init\nInitials.@def\nInitials.@disambiguate\nInitials.hasinitial\nInitials.isknown\nInitials.Initial","category":"page"},{"location":"#Initials","page":"Home","title":"Initials","text":"Initials\n\n(Image: Stable) (Image: Dev) (Image: Build Status) (Image: Codecov) (Image: Coveralls) (Image: Aqua QA)\n\njulia> using Initials\n\njulia> Init(+) + 1\n1\n\njulia> foldl(+, 1:3, init=Init(+))\n6\n\nFollowing methods are defined:\n\njulia> Init(*) * 1\n1\n\njulia> Init(&) & 1\n1\n\njulia> Init(|) | 1\n1\n\njulia> min(Init(min), 1)\n1\n\njulia> max(Init(max), 1)\n1\n\njulia> Base.add_sum(Init(Base.add_sum), 1)\n1\n\njulia> Base.mul_prod(Init(Base.mul_prod), 1)\n1\n\nMethod ambiguities are tested using Aqua.jl.\n\n\n\n\n\n","category":"module"},{"location":"#Initials.Init","page":"Home","title":"Initials.Init","text":"Init(op) :: Initial\n\nA generic (left) identity for op.\n\nExamples\n\njulia> using Initials\n\njulia> Init(*) isa Initials.Initial\ntrue\n\njulia> Init(*) * 1\n1\n\njulia> Init(*) * missing\nmissing\n\njulia> Init(*) * \"right\"\n\"right\"\n\njulia> Init(*) * :actual_anything_works\n:actual_anything_works\n\njulia> foldl(+, 1:3, init=Init(+))\n6\n\njulia> float(Init(*))\n1.0\n\njulia> Integer(Init(+))\n0\n\n\n\n\n\n","category":"function"},{"location":"#Initials.@def","page":"Home","title":"Initials.@def","text":"Initials.@def op [y = :x]\n\nDefine a generic (left) identity for op.\n\nInitials.@def op is expanded to\n\nop(::SpecificInitial{typeof(op)}, x) = x\nInitials.hasinitial(::Type{typeof(op)}) = true\n\nFor operations like push!, it is useful to define the returned value to be different from x.  This can be done by using the second argument to the maco; i.e., Initials.@def op [x] is expanded to\n\npush!(::SpecificInitial{typeof(push!)}, x) = [x]\nInitials.hasinitial(::Type{typeof(push!)}) = true\n\nNote that the second argument to op is always x.\n\n\n\n\n\n","category":"macro"},{"location":"#Initials.@disambiguate","page":"Home","title":"Initials.@disambiguate","text":"Initials.@disambiguate op RightType [y = :x]\n\nDisambiguate the method introduced by @def.\n\nIt is expanded to\n\nop(::SpecificInitial{typeof(op)}, x::RightType) = x\n\n\n\n\n\n","category":"macro"},{"location":"#Initials.hasinitial","page":"Home","title":"Initials.hasinitial","text":"Initials.hasinitial(op) :: Bool\n\nExamples\n\njulia> using Initials\n\njulia> all(Initials.hasinitial, [\n           *,\n           +,\n           &,\n           |,\n           min,\n           max,\n           Base.add_sum,\n           Base.mul_prod,\n       ])\ntrue\n\njulia> Initials.hasinitial((x, y) -> x + y)\nfalse\n\n\n\n\n\n","category":"function"},{"location":"#Initials.isknown","page":"Home","title":"Initials.isknown","text":"Initials.isknown(::Initial) :: Bool\n\nExamples\n\njulia> using Initials\n\njulia> Initials.isknown(Init(+))\ntrue\n\njulia> Initials.isknown(Init((x, y) -> x + y))\nfalse\n\n\n\n\n\n","category":"function"},{"location":"#Initials.Initial","page":"Home","title":"Initials.Initial","text":"Initials.Initial\n\nAn abstract super type of all identity types.\n\n\n\n\n\n","category":"type"}]
}