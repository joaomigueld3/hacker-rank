/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode answer = null;
		
		ListNode aux1 = l1,aux2 = l2;
		int carry = 0;
		
		while(aux1 != null || aux2 != null) {
			int x = (aux1 != null) ? aux1.val:0;
			int y = (aux2 != null) ? aux2.val:0;
			int soma = x + y + carry;
			carry = soma / 10;
			
			if(soma >= 0 && soma < 10) {
				answer = meuAddAux(soma, answer);
				
				if(aux2 != null) {
					aux2 = aux2.next;
				}
				if(aux1 != null) {
					aux1 = aux1.next;
				}
				
			}
			else if(soma >= 10) {
				int resto = soma % 10;
				answer = meuAddAux(resto, answer);
				if(aux2 != null) {
					aux2 = aux2.next;
				}
				if(aux1 != null) {
					aux1 = aux1.next;
				}
			}
            
		}
    if(carry > 0) {
			answer = meuAddAux(carry, answer);
		}
	return answer;
	
}
    
    

public ListNode meuAdd(int i,int valor, ListNode node) {
	
	if(valor >= 0 && valor <= 9) {
		if(node == null) {
			return new ListNode(valor,null);
		} else if (node.next == null) {
			i++;
			return new ListNode(node.val,new ListNode(valor,null));
		} else {
			return new ListNode(node.val, meuAdd(i+1,valor,node.next));
		}
		} else {
			return null;
		}
	
}
public ListNode meuAddAux(int valor, ListNode node) {
	return meuAdd(0, valor, node);
}
    
}