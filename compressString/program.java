class Main{
    public static void main(String args[])
    {
        String s =  "aabbaaaccbb";
        /*Input: aabbaaaccbb
            Output: a2b2a3c2b2*/
            int c=1;
        for(int i=0;i<s.length();i++)
        {
            for(int j=i+1;j<s.length();j++)
            {
                if(s.charAt(i)== s.charAt(j))
                {
                    c++;
                }
                else{
                  
                    System.out.print(s.charAt(i)+c);
                      c=1;
                    i=j;
                }
            }
        }
    }
}