namespace example {
  int multiply(int a, int b) {
    volatile int i = 0;
    for(i; i <= 1000000; i++) {};

    return a * b;
  }
}