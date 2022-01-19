package com.example.wallpaper;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.google.android.material.bottomnavigation.BottomNavigationView;

public class MainActivity extends AppCompatActivity {
//   BottomNavigationView nav;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
//        nav = findViewById(R.id.bottom_navigation);
//        nav.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
//            @Override
//            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
//                switch (item.getItemId()){
//                    case R.id.explore:
//                        Toast.makeText(MainActivity.this, "Explore", Toast.LENGTH_SHORT).show();
//                    case R.id.page_1:
//                        Toast.makeText(MainActivity.this, "Explore", Toast.LENGTH_SHORT).show();
//                    case R.id.page_2:
//                        Toast.makeText(MainActivity.this, "Explore", Toast.LENGTH_SHORT).show();
//                    case R.id.page_3:
//                        Toast.makeText(MainActivity.this, "Explore", Toast.LENGTH_SHORT).show();
//                }
//                return true;
//            }
//        });
    }
}