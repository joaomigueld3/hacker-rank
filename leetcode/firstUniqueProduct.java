import java.util.*;
import java.util.LinkedList;
import java.util.Queue;
public class JobsityTest {	
	
	    public static String firstUniqueProduct(String[] products) {
	        //throw new UnsupportedOperationException("Waiting to be implemented.");
	        //Queue<String> q1 = new LinkedList<>();
	        HashMap<String, Integer> m1 = new HashMap<>();
	        for(int i = 0; i < products.length; i++) {
	        	m1.put(products[i], m1.getOrDefault(products[i], 0) + 1);	        	
	        }
	        //System.out.println("\n m1:" + m1.toString());
	        for (String product : products) {
	            if (m1.get(product) == 1) {
	                // Encontramos o primeiro!
	                return product; 
	            }
	        }
	                
	        
	        return null;
	        
	    }

	    public static void main(String[] args) {
	    	
	    	System.out.println(firstUniqueProduct(new String[] {"Apple", "Computer", "Apple", "Bag"}));
	    	System.out.println(firstUniqueProduct(new String[] {"A", "B", "B", "A"}));
	    	
	        System.out.println("Iniciando testes...\n");
	        boolean allPassed = true;

	        // Teste 1: Caso Básico
	        String[] input1 = {"Apple", "Computer", "Apple", "Bag"};
	        allPassed &= assertTest(1, "Caso Básico", input1, "Computer");

	        // Teste 2: Todos Únicos
	        String[] input2 = {"X", "Y", "Z"};
	        allPassed &= assertTest(2, "Todos Únicos", input2, "X");

	        // Teste 3: Nenhum Único
	        String[] input3 = {"A", "B", "B", "A"};
	        allPassed &= assertTest(3, "Nenhum Único", input3, null);

	        // Teste 4: Único no Final e Misturado
	        String[] input4 = {"A", "B", "A", "C", "B", "D"};
	        allPassed &= assertTest(4, "Único no Meio/Final", input4, "C");

	        // Teste 5: Performance
	        System.out.print("Teste 5 (Performance - 100k itens)... ");
	        long startTime = System.currentTimeMillis();
	        String[] largeInput = generateLargeArray();
	        String result = firstUniqueProduct(largeInput);
	        long endTime = System.currentTimeMillis();

	        
	        boolean perfPassed = "UNIQUE_ITEM".equals(result);
	        long duration = endTime - startTime;
	        
	        if (perfPassed && duration < 200) { // Limite generoso de 200ms
	            System.out.println("PASSOU (" + duration + "ms)");
	        } else {
	            System.out.println("FALHOU. Resultado: " + result + ", Tempo: " + duration + "ms");
	            if (duration >= 200) System.out.println("  -> Dica: Sua solução deve ser O(N). Evite loops aninhados.");
	            allPassed = false;
	        }

	        System.out.println("\nResultado Final: " + (allPassed ? "TODOS OS TESTES PASSARAM! PARABÉNS!" : "ALGUNS TESTES FALHARAM."));
	    }

	    // Helper para verificar os testes lógicos
	    private static boolean assertTest(int id, String name, String[] input, String expected) {
	        String result = firstUniqueProduct(input);
	        boolean passed = Objects.equals(result, expected);
	        System.out.println("Teste " + id + " (" + name + "): " + (passed ? "PASSOU" : "FALHOU"));
	        if (!passed) {
	            System.out.println("   Esperado: " + expected);
	            System.out.println("   Recebido: " + result);
	        }
	        return passed;
	    }

	    // Gerador de array grande para teste de carga
	    private static String[] generateLargeArray() {
	        int size = 100000;
	        String[] arr = new String[size];
	        // Preenche com pares duplicados
	        for (int i = 0; i < size - 1; i++) {
	            arr[i] = "Product_" + (i / 2); 
	            
	        }
	        // O último item é único
	        arr[size - 1] = "UNIQUE_ITEM";

	        return arr;
	    }
	
	

}
