import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) throws Exception {
        Scanner s = new Scanner(System.in);
        
        int numero_conta;
        String agencia, nome_cliente;
        double saldo;

        System.out.println("Olá, seja bem-vindo(a) !!!");
        
        System.out.print("Por favor, digite o número da Agência: ");
        agencia = s.nextLine();

        System.out.print("Digite seu nome: ");
        nome_cliente = s.nextLine();

        System.out.print("Digite o número da conta: ");
        numero_conta = s.nextInt();

        System.out.print("Digite o seu saldo: ");
        saldo = s.nextDouble();

        System.out.printf("Olá %s, obrigado por criar uma conta em nosso banco. Sua agência é %s, conta %d, e seu saldo %.2f já está disponível para saque.%n", nome_cliente, agencia, numero_conta, saldo);
        
        s.close();
    }
}
