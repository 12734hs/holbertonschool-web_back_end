#!/usr/bin/env python3
"""We are going to check time out"""
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """YEAHHHHHHHHHHHHHHHHHHHHHHH"""
    start_time = time.perf_counter()
    await asyncio.gather(
                         async_comprehension(), 
                         async_comprehension(), 
                         async_comprehension(), 
                         async_comprehension()
                        )
    end_time = time.perf_counter()
    final_time = end_time - start_time
    return final_time
