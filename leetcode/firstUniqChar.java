import java.util.Stack;
import java.util.ArrayList;
import java.util.List;

public class MyClass {
    
    public static Boolean containsChar(String s, char c) {
        for (int i = 0; i < s.length(); i++) {
            if (c == s.charAt(i)) return true;
        }
        return false;
    }
    
    public static String stringUnique(String s) {
        String temp = "";
        for (int i = 0; i < s.length(); i++) {
            char curr = s.charAt(i);
            if (!temp.contains(String.valueOf(curr))) {
            temp += curr;
        }
        }
        return temp;
    }
    
    public static String firstUniqueChar(String s) {
        // "aabbcddeff" -> c
        // "aabbcddec" -> e
        // "aabb" -> null
        
        // percorre tudo, guarda em um array de array/map com [char, count, index]
        // percorre o novo array e retorna quem tiver count = 1 e menor index
        // muito custoso
        // Stack<String> pilha = new Stack<>();
        List<String> word = new ArrayList<>();

        for (int i = 0; i < s.length(); i++) {
            char curr = s.charAt(i);
            if (word.contains(String.valueOf(curr))) {
                word.remove(String.valueOf(curr));
            }
            else if (!word.contains(String.valueOf(curr))) {
                word.add(String.valueOf(curr));
            }
        }
        System.out.println(word);
        if (word.size() < 1) return null; 
        return word.get(0);
        
    }
    
    
    public static void main(String args[]) {

        System.out.println(containsChar("aabbcddeff", 'f'));
        System.out.println(firstUniqueChar("aabbcddec"));
    }
}
