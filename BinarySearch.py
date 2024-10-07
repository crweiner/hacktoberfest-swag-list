import java.util.Arrays;

public class BinarySearchExample {
    
    // Method for performing binary search
    public static int binarySearch(int[] array, int key) {
        int left = 0;
        int right = array.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            // Check if the key is present at mid
            if (array[mid] == key) {
                return mid; // key found, return index
            }
            
            // If the key is greater, ignore the left half
            if (array[mid] < key) {
                left = mid + 1;
            }
            // If the key is smaller, ignore the right half
            else {
                right = mid - 1;
            }
        }
        
        // If we reach here, the element is not present in array
        return -1;
    }

    public static void main(String[] args) {
        // Example usage
        int[] array = {2, 3, 4, 10, 40, 50, 60};
        int key = 10;
        
        // The array must be sorted
        Arrays.sort(array);
        
        // Perform binary search
        int result = binarySearch(array, key);
        
        if (result == -1) {
            System.out.println("Element not present in the array");
        } else {
            System.out.println("Element found at index: " + result);
        }
    }
}
