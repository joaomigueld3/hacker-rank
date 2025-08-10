import java.util.ArrayList;
import java.util.List;
import java.util.LinkedHashMap;
import java.util.Map;

public class MyClass {

    public static int firstUniqCharIndex(String s) {
        
        
        Map<Character, Integer> counts = new LinkedHashMap<>();
        List<Character> existChar = new ArrayList<>();

        for (int i = 0; i < s.length(); i++) {
            char curr = s.charAt(i);
            if (counts.containsKey(curr)) {
                existChar.add(curr);
                counts.remove(curr);
            }
            else if (!counts.containsKey(curr) && !existChar.contains(curr)) {
                counts.put(curr, i);
            }
        }

        Integer firstValue = null;
        if (!counts.isEmpty()) {
            System.out.println(counts);
            firstValue = counts.values().iterator().next();
            return firstValue;
        }
        return -1;
    }

        public static void main(String args[]) {
        System.out.println(firstUniqCharIndex("aadadaad"));
    }

}